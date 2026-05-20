import { Ionicons } from '@expo/vector-icons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const CIRCLE_SIZE = 52
const TAB_BAR_HEIGHT = 64

type TabRouteName = 'index' | 'learn' | 'ai-teacher' | 'chat' | 'profile'

const TAB_CONFIG: Record<
  TabRouteName,
  {
    label: string
    icon: keyof typeof Ionicons.glyphMap
    iconOutline: keyof typeof Ionicons.glyphMap
  }
> = {
  index: { label: 'Home', icon: 'home', iconOutline: 'home-outline' },
  learn: { label: 'Learn', icon: 'book', iconOutline: 'book-outline' },
  'ai-teacher': {
    label: 'AI Teacher',
    icon: 'sparkles',
    iconOutline: 'sparkles-outline',
  },
  chat: {
    label: 'Chat',
    icon: 'chatbubble',
    iconOutline: 'chatbubble-outline',
  },
  profile: { label: 'Profile', icon: 'person', iconOutline: 'person-outline' },
}

function isTabRouteName(name: string): name is TabRouteName {
  return name in TAB_CONFIG
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { width } = useWindowDimensions()
  const { bottom } = useSafeAreaInsets()
  const tabWidth = width / state.routes.length

  const activeX = useSharedValue(
    state.index * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2,
  )

  useEffect(() => {
    activeX.value = withTiming(
      state.index * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2,
      { duration: 250, easing: Easing.out(Easing.cubic) },
    )
  }, [state.index, tabWidth, activeX])

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: activeX.value }],
  }))

  return (
    <View className='bg-white border-t border-border' style={styles.shadow}>
      {/* Tab row: fixed height so the circle is always centered correctly */}
      <View className='flex-row h-16 items-center relative'>
        {/* Sliding circle */}
        <Animated.View
          className='absolute w-13 h-13 rounded-full bg-lingua-purple'
          style={[styles.circle, circleStyle]}
        />

        {/* Tab buttons */}
        {state.routes.map((route, index) => {
          const isActive = state.index === index
          if (!isTabRouteName(route.name)) {
            console.warn(`Unknown tab route: ${route.name}`)
            return null
          }
          const config = TAB_CONFIG[route.name]

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <TouchableOpacity
              key={route.key}
              className='flex-1 items-center justify-center h-16'
              style={styles.tab}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.7}
              accessibilityRole='tab'
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={config.label}
            >
              <Ionicons
                name={isActive ? config.icon : config.iconOutline}
                size={22}
                color={isActive ? '#FFFFFF' : '#6B7280'}
              />
              {!isActive && (
                <Text className='text-[11px] mt-0.75 font-poppins-medium text-text-secondary'>
                  {config.label}
                </Text>
              )}
            </TouchableOpacity>
          )
        })}
      </View>

      {/* Safe area spacer */}
      <View style={{ height: bottom, backgroundColor: '#FFFFFF' }} />
    </View>
  )
}

const styles = StyleSheet.create({
  // Platform shadow — not expressible via NativeWind (iOS/Android exception)
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  // Computed from constants — preserved as dynamic per guidelines
  circle: {
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
    zIndex: 0,
  },
  // z-index kept in StyleSheet per exception rules
  tab: {
    zIndex: 1,
  },
})

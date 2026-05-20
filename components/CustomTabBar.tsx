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
    <View style={styles.wrapper}>
      {/* Tab row: fixed height so the circle is always centered correctly */}
      <View style={styles.tabRow}>
        {/* Sliding circle */}
        <Animated.View style={[styles.circle, circleStyle]} />

        {/* Tab buttons */}
        {state.routes.map((route, index) => {
          const isActive = state.index === index
          const config = TAB_CONFIG[route.name as TabRouteName]

          if (!config) return null

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
              style={styles.tab}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isActive ? config.icon : config.iconOutline}
                size={22}
                color={isActive ? '#FFFFFF' : '#6B7280'}
              />
              {!isActive && <Text style={styles.label}>{config.label}</Text>}
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
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  tabRow: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: '#6C4EF5',
    zIndex: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: TAB_BAR_HEIGHT,
    zIndex: 1,
  },
  label: {
    fontSize: 11,
    marginTop: 3,
    fontFamily: 'Poppins-Medium',
    color: '#6B7280',
  },
})

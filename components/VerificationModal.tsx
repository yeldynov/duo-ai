import { AntDesign } from '@expo/vector-icons'
import React, { useEffect, useRef, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

interface VerificationModalProps {
  visible: boolean
  email: string
  onClose: () => void
  onVerify: (code: string) => Promise<void>
  onResend?: () => void
  error?: string | null
}

const CODE_LENGTH = 6

export default function VerificationModal({
  visible,
  email,
  onClose,
  onVerify,
  onResend,
  error,
}: VerificationModalProps) {
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''))
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    if (visible) {
      setCode(Array(CODE_LENGTH).fill(''))
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [visible])

  const filledCount = code.filter(Boolean).length

  const handleChangeText = (text: string) => {
    // Only allow digits
    const digits = text.replace(/\D/g, '').slice(0, CODE_LENGTH)
    const newCode = Array(CODE_LENGTH).fill('')
    for (let i = 0; i < digits.length; i++) {
      newCode[i] = digits[i]
    }
    setCode(newCode)

    if (digits.length === CODE_LENGTH) {
      Keyboard.dismiss()
      setTimeout(() => {
        void (async () => {
          try {
            await onVerify(digits)
          } catch (err) {
            console.error('Verification error:', err)
          }
        })()
      }, 200)
    }
  }

  const displayValue = code.join('')

  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        style={styles.overlay}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={styles.sheet}>
          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <AntDesign name='close' size={20} color='#6B7280' />
          </TouchableOpacity>

          {/* Header */}
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>{"We've sent a 6-digit code to"}</Text>
          <Text style={styles.emailText} numberOfLines={1}>
            {email || 'your email'}
          </Text>

          {/* Code boxes */}
          <View style={styles.codeRow}>
            {Array(CODE_LENGTH)
              .fill(null)
              .map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.codeBox,
                    filledCount > i && styles.codeBoxFilled,
                  ]}
                  onPress={() => inputRef.current?.focus()}
                  activeOpacity={0.8}
                >
                  <Text style={styles.codeDigit}>{code[i] || ''}</Text>
                  {filledCount === i && <View style={styles.cursor} />}
                </TouchableOpacity>
              ))}
          </View>

          {/* Hidden input */}
          <TextInput
            ref={inputRef}
            value={displayValue}
            onChangeText={handleChangeText}
            keyboardType='number-pad'
            maxLength={CODE_LENGTH}
            style={styles.hiddenInput}
            caretHidden
          />

          {/* Error message */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Resend */}
          <View style={styles.resendRow}>
            <Text style={styles.resendText}>{"Didn't receive a code? "}</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onResend && onResend()}
            >
              <Text style={styles.resendLink}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  sheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#0D132B',
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  emailText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#0D132B',
    marginBottom: 28,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  codeBox: {
    width: 48,
    height: 56,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F7FB',
  },
  codeBoxFilled: {
    borderColor: '#6C4EF5',
    backgroundColor: '#FFFFFF',
  },
  codeDigit: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#0D132B',
    lineHeight: 26,
  },
  cursor: {
    position: 'absolute',
    bottom: 12,
    width: 2,
    height: 20,
    backgroundColor: '#6C4EF5',
    borderRadius: 1,
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  resendLink: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#6C4EF5',
  },
  errorText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 8,
  },
})

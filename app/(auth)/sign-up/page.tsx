'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Phone,
  Building2,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Shield
} from 'lucide-react'
import Button from '@/components/ui/Button'

export default function SignUpPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp')
      setIsLoading(false)
      return
    }

    // Validate password strength
    if (formData.password.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự')
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess(true)
      setTimeout(() => {
        router.push('/sign-in')
      }, 1500)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="relative w-full max-w-2xl">
        {/* Form */}
        <div className="bg-background/80 backdrop-blur-sm border-2 border-border rounded-2xl p-6 md:p-8 shadow-border-md">
          <div className="text-center mb-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="VietGreen Logo"
                  width={48}
                  height={48}
                  className="relative"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-primary">
                VietGreen
              </span>
            </Link>
            <h1 className="text-2xl font-bold mt-4 mb-2">Tạo tài khoản</h1>
            <p className="text-foreground/60 text-sm">
              Bắt đầu hành trình xanh của bạn ngay hôm nay
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Full Name & Email - 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & Company - 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Số điện thoại
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0912 345 678"
                    className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Tên công ty (tùy chọn)
                </label>
                <div className="relative">
                  <Building2 size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Công ty ABC"
                    className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Password & Confirm Password - 2 cột */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Ít nhất 8 ký tự"
                    className="w-full pl-10 pr-12 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Xác nhận mật khẩu <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Nhập lại mật khẩu"
                    className="w-full pl-10 pr-12 py-3 bg-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Row 4: Terms - 1 cột full width */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0 mt-0.5"
                required
              />
              <label htmlFor="terms" className="text-sm text-foreground/60">
                Tôi đồng ý với{' '}
                <Link href="/terms" className="text-primary hover:underline">
                  Điều khoản sử dụng
                </Link>
                {' '}và{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Chính sách bảo mật
                </Link>
              </label>
            </div>

            {/* Error message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Success message */}
            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl text-green-600 dark:text-green-400 text-sm">
                <CheckCircle size={16} className="flex-shrink-0" />
                <span>Đăng ký thành công! Đang chuyển đến trang đăng nhập...</span>
              </div>
            )}

            {/* Submit - 1 cột full width */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              icon={!isLoading ? <ArrowRight size={18} /> : undefined}
              iconPosition="right"
              disabled={isLoading || !formData.agreeTerms}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Đang đăng ký...
                </span>
              ) : (
                'Đăng ký'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-background text-foreground/40">
                Hoặc đăng ký với
              </span>
            </div>
          </div>

          {/* Social login - Google & Facebook */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              size="md"
              className="w-full justify-center border-2 hover:border-[#4285F4] hover:bg-[#4285F4]/5 transition-all duration-300 group"
              icon={
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              }
              iconPosition="left"
            >
              <span className="group-hover:text-[#4285F4] transition-colors">Đăng ký với Google</span>
            </Button>

            <Button
              variant="outline"
              size="md"
              className="w-full justify-center border-2 hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all duration-300 group"
              icon={
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              }
              iconPosition="left"
            >
              <span className="group-hover:text-[#1877F2] transition-colors">Đăng ký với Facebook</span>
            </Button>
          </div>

          {/* Sign in link */}
          <p className="text-center text-sm text-foreground/60 mt-6">
            Đã có tài khoản?{' '}
            <Link href="/sign-in" className="text-primary font-medium hover:underline">
              Đăng nhập ngay
            </Link>
          </p>

          {/* Security note */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-foreground/40">
            <Shield size={14} />
            <span>Dữ liệu của bạn được bảo mật an toàn</span>
          </div>
        </div>
      </div>
    </div>
  )
}

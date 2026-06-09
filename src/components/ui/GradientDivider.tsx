export default function GradientDivider() {
  return (
    <div className="flex justify-center my-4">
      <div
        className="h-[2px] w-20 rounded-full"
        style={{ background: 'linear-gradient(90deg, #06b6d4, #a855f7)' }}
      />
    </div>
  )
}

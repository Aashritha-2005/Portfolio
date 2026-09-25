export default function GradientDivider() {
  return (
    <div className="flex justify-center my-4">
      <div
        className="h-[2px] w-20 rounded-full"
        style={{ background: 'linear-gradient(90deg, #5a321d, #d39a63, #fff1d6)' }}
      />
    </div>
  )
}

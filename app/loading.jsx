export default function Loading() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-bg-primary">
      <div className="flex items-center gap-2">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>
    </section>
  );
}

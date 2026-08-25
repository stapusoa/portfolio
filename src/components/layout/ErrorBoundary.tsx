import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { error: Error | null }

/**
 * Keeps a render error in one route from blanking the whole site. React has no
 * hook equivalent for this — an error boundary must be a class component.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surfaced in the console rather than swallowed, so the failure is still
    // diagnosable in a deployed build.
    console.error('Unhandled render error:', error, info.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div
        role="alert"
        className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-6 px-6 py-28 md:px-14 lg:px-32"
      >
        <h1 className="font-serif text-title lowercase text-default">
          something went wrong
        </h1>
        <p className="max-w-prose text-base text-muted-foreground">
          This page hit an unexpected error. Reloading usually clears it.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Reload the page
        </button>
      </div>
    )
  }
}

# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Lingua Expo app. The following changes were made:

- **`lib/posthog.ts`** — PostHog client configured via `expo-constants` reading `app.config.js` extras. Disabled automatically if no token is set.
- **`app.config.js`** — Migrated from `app.json` to `app.config.js` to expose `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` as extras.
- **`app/_layout.tsx`** — Wrapped the app in `PostHogProvider` with autocapture enabled. Added manual screen tracking via `usePathname` + `useEffect`.
- **`app/onboarding.tsx`** — Tracks when users tap Get Started.
- **`app/(auth)/sign-up.tsx`** — Tracks sign-up submission, errors, and completion. Calls `posthog.identify()` on successful sign-up.
- **`app/(auth)/sign-in.tsx`** — Tracks sign-in submission, errors, and completion. Calls `posthog.identify()` on successful sign-in.
- **`hooks/useSSOFlow.tsx`** — Tracks SSO login attempts and completions with the provider strategy as a property.
- **`app/language-selection.tsx`** — Tracks when users confirm their chosen language, including the language name and ID.
- **`app/(tabs)/index.tsx`** — Tracks when users tap Continue on the home screen to resume their current course.

## Events

| Event | Description | File |
|---|---|---|
| `onboarding_get_started_tapped` | User taps the Get Started button on the onboarding screen | `app/onboarding.tsx` |
| `sign_up_submitted` | User submits the sign-up form with email and password | `app/(auth)/sign-up.tsx` |
| `sign_up_completed` | User successfully completes sign-up after email verification | `app/(auth)/sign-up.tsx` |
| `sign_up_error` | Sign-up failed due to an error | `app/(auth)/sign-up.tsx` |
| `sign_in_submitted` | User submits the sign-in form with their email | `app/(auth)/sign-in.tsx` |
| `sign_in_completed` | User successfully signs in after email code verification | `app/(auth)/sign-in.tsx` |
| `sign_in_error` | Sign-in failed due to an error | `app/(auth)/sign-in.tsx` |
| `sso_sign_in_attempted` | User taps a social login button (Google, Facebook, Apple) | `hooks/useSSOFlow.tsx` |
| `sso_sign_in_completed` | User successfully authenticates via SSO provider | `hooks/useSSOFlow.tsx` |
| `language_confirmed` | User selects and confirms a language to learn | `app/language-selection.tsx` |
| `continue_learning_tapped` | User taps Continue on the home screen to resume their course | `app/(tabs)/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/project/181711/dashboard/694059)
- [Sign-up Conversion Funnel](/project/181711/insights/PTtbZ0BQ) — Drop-off from Get Started → submitted → completed
- [Sign-in Conversion Funnel](/project/181711/insights/RpotfUmz) — Email verification success rate
- [Language Selections Over Time](/project/181711/insights/UFUifhYO) — Daily trend of users picking a language
- [SSO Sign-in by Provider](/project/181711/insights/8A0dnrWB) — Google vs Facebook vs Apple usage
- [Daily Active Learners](/project/181711/insights/MPXHu6za) — Unique users resuming their course each day

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

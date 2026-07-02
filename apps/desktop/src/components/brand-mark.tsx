import { cn } from '@/lib/utils'
import { useTheme } from '@/themes/context'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

// Brand badge: identity mark on a white tile, identical in light/dark.
// The active theme's `branding.brandMarkUrl` overrides the default Nous mark,
// letting branded skins (e.g. Caravela) replace the chrome identity asset
// without forking this component.
export function BrandMark({ className, ...props }: React.ComponentProps<'span'>) {
  const { theme } = useTheme()
  const src = assetPath(theme.branding?.brandMarkUrl ?? 'nous-girl.jpg')

  return (
    <span
      className={cn(
        'inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white',
        className
      )}
      {...props}
    >
      <img alt="" className="size-full object-contain" src={src} />
    </span>
  )
}

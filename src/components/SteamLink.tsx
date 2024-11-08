// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
interface SteamLinkProps {
  title: string;
  src: string;
}
export function SteamLink({ title, src }: SteamLinkProps) {
  return (
    <div className="steamlink">
      <iframe title={title} src={src} frameborder="0" width="646" height="190"></iframe>
    </div>
    
  );
}

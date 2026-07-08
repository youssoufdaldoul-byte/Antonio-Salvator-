// MAISON LUMIÈRE — entrance crossfade layers (Step 1, isolated)
// A fixed veil between the background video and the content: a golden
// bloom and the interior of the house, both driven by useEntrance.js.
// Delete this component + the useEntrance hook to fully revert Step 1.
import { asset } from '../asset'

export default function EntranceVeil() {
  return (
    <div className="entrance-veil" aria-hidden="true">
      <img
        id="entrance-interior"
        className="entrance-veil__interior"
        src={asset('/images/interior-hall.webp')}
        alt=""
        draggable="false"
      />
      <div id="entrance-bloom" className="entrance-veil__bloom" />
    </div>
  )
}

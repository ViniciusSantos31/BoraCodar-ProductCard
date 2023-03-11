import { Icon360View } from "../../assets/icons";

import "./styles.css";

const SofaModel: React.FC = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <img src={Icon360View} alt="360 icon" className="icon-view" />
      <iframe
        className="sketchfab-embed"
        title="Margot 2 Seater Sofa, Old Rose Velvet"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        src="https://sketchfab.com/models/b3d693a003c94f4e989c08fe08c3af8c/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"></iframe>
    </div>
  );
};

export default SofaModel;

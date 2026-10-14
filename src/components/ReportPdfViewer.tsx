import DriveFilePreview from "./DriveFilePreview";
type Props={title:string;fileName:string;description:string;fileId:string;fallbackHref:string};
export default function ReportPdfViewer(props:Props){return <div className="report-pdf-viewer"><DriveFilePreview {...props} large buttonLabel="Abrir PDF"/></div>}
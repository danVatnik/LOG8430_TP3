export default class Lecteur extends React.Component {
    render() {
        let { chanson } = this.props;

        let html = (<div></div>);
        if (chanson != null) {
            html = (
                <div className="row">
                    <div className="lecteur column" dangerouslySetInnerHTML={{__html:chanson.iframeHtml}}></div>
                </div>
            );
        }
        return html;
    }
}
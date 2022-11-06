class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: this.props.text
        }
        this.changeInput = this.changeInput.bind(this)
    }
    changeInput(event) {
        this.setState({
            userInput: event.target.value
        })
    }
    render() {
        const markedUpText = marked.parse(this.state.userInput, {breaks: true})
        document.getElementById('preview') !== null ?
        document.getElementById('preview').innerHTML = markedUpText : ''
        return (
            <div>
                <h1 id="title">Markdown Previewer</h1>
                <div id="editorCol">
                    <textarea id="editor" value={this.state.userInput} onChange={this.changeInput}>
                        
                    </textarea>
                </div>
                <div id="previewCol">
                    <div id="preview" dangerouslySetInnerHTML={{ __html: markedUpText }}>
                    </div>
                </div> 
            </div>
        );
    }
}


const defaultText = `# This is where we see the previewer.
## You can edit this text here!
### We can show you some cool stuff now!

This is a link from [freeCodeCamp](https://www.freecodecamp.org)!

We have **bold** text, _italic_, and we can use **_both_**!
Have fun ~~crossing~~ stuff out!

This is a \`code\` block!
\`\`\`
// this is multi-line code:
<h1>A H1 Heading!</h1>
<h2>A H2 Heading!</h2>
\`\`\`

These are lists! You can go deeper and deeper!
- This is a bullet list!
    - Some bullets look different once you go deeper
        - Well i think we're done with the bullet list now!
1. These are numbered lists
2. We can just use 1s or other numbers!
3. Well this is the last number, but you can add more!

> This is a Block Quote!
and we also have images! (You can also add a link to it!)
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

`

const root = ReactDOM.render(<MarkdownPreviewer text={defaultText}/>, document.getElementById('root'))

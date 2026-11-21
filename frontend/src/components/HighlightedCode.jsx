const TOKEN_SOURCE = '(\/\\/.*|#.*|\\/\\*[\\s\\S]*?\\*\\/|"(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\'|\\b(?:def|function|class|return|if|else|elif|for|while|import|from|const|let|var|public|private|protected|static|void|int|new|throw|try|catch|finally|assert|expect|describe|test|true|false|null|None|True|False)\\b|\\b\\d+(?:\\.\\d+)?\\b)';
const TOKEN_PATTERN = new RegExp(TOKEN_SOURCE, 'g');
const TOKEN_MATCH_PATTERN = new RegExp(`^${TOKEN_SOURCE}$`);

function tokenType(token) {
  if (/^(\/\/|#|\/\*)/.test(token)) return 'cm';
  if (/^["']/.test(token)) return 'str';
  if (/^\d/.test(token)) return 'num';
  return 'kw';
}

export default function HighlightedCode({ code }) {
  const lines = code.split('\n');
  return <>{lines.map((line, lineIndex) => <span className="code-line" key={`${lineIndex}-${line}`}>
    {line.split(TOKEN_PATTERN).map((part, index) => part && TOKEN_MATCH_PATTERN.test(part)
      ? <span className={tokenType(part)} key={`${lineIndex}-${index}`}>{part}</span>
      : <span key={`${lineIndex}-${index}`}>{part}</span>)}
    {lineIndex < lines.length - 1 ? '\n' : ''}
  </span>)}</>;
}

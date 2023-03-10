import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

export const renderHtmlContent = content => {
	const md = MarkdownIt();
	const html = md.render(content || '');
	return parse(html || '');
};
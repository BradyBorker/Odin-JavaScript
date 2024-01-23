import buildBaseHtml from './build_base_html';
import buildHomeHtml from './build_home_html';

let currentPage = '';
buildBaseHtml();
currentPage = buildHomeHtml();


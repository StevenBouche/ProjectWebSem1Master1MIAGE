import ForumView from "./ForumView";

export default class ForumSearchView {
  totalItem: number;
  totalPage: number;
  currentPage: number;
  nbItemPerPage: number;
  nameFilter: string;
  descFilter: string;
  forumSearch: Array<ForumView>;
}

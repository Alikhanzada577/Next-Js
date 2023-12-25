
type PostAuthor = {
  name: string;
  avatar?:string;
  github?: string;
  profile_image:string;
}


export type Post = {
  slug: string,
  date: string,
  title: string,
  description: string,
  tags: string[],
  id: string,
  bodyHtml?: string,
  coverImage?: string,
  author? : PostAuthor,
  postUrl?: string,
  cover:string,
  
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const content: any;
  export default content;
}
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

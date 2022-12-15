export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLenght(content);
    if (!isContentLengthValid) {
      throw new Error('Content Lenght invalid');
    }

    this.content = content;
  }

  private validateContentLenght(content: string) {
    return content.length > 5 && content.length <= 240;
  }
}

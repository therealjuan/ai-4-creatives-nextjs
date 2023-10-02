function transformToString(str: string | null | undefined): string {
    if (str) {
      str = str
        .replace(/\s*\/\s*|\s*\:\s*/g, ' ')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
      return str;
    }
    return ""; // default to empty string if input is null or undefined
  }

  export default transformToString;
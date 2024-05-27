export default function SnackEmoji(name: string) {
  switch (name.toLowerCase()) {
    case "burger":
      return "🍔";
    case "pizza":
      return "🍕";
    case "ice-cream":
      return "🍨";
    case "drink":
      return "🧃";
    default:
      return "😀";
  }
}

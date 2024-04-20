export function getProgressPercentage(
  currentPosition: number,
  totalDuration: number
) {
  // Ensure totalDuration is a positive number
  if (totalDuration <= 0) {
    return 0;
  }

  // Calculate the progress percentage
  const progressPercentage = (currentPosition / totalDuration) * 100;

  // Ensure progress percentage is within [0, 100] range
  return Math.min(100, Math.max(0, progressPercentage));
}

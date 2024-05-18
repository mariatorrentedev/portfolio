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

export const ABOUT_ME_TEXT = `In the solo dance of technology and music, I find my rhythm, weaving
        code and melodies into seamless experiences that strike a chord with
        users. With a passion for innovation and a knack for human connection, I
        orchestrate harmonious solutions that bridge the gap between the digital
        realm and the dance floor of life. Let's harmonize together,
        transforming melodies into great designs, beats into rhythmic
        development cycles, and progressions into solid infrastructures that
        support lasting user experiences.`;

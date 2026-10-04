export type GoogleReview = {
  author: string;
  rating: number;
  date: string;
  text: string;
};

// Published by hand from the Google Business Profile: paste only real review
// text, and keep `rating` and `count` in sync with the live profile.
// The section stays in its "pending" state until `items` has entries.
export const googleReviews = {
  profileUrl: '',
  writeReviewUrl: '',
  rating: 0,
  count: 0,
  items: [] as GoogleReview[],
};

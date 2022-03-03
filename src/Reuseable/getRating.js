export const getRating = (rating) => {
    const ratedUpon5 = Math.floor((5 * rating) / 10);

    let ratingCollection = [];

    for (let i = 0; i < ratedUpon5; i++) {
        const ratedStar = <i class="fa fa-star"></i>;
        ratingCollection = [...ratingCollection, ...[ratedStar]];
    }

    for (let i = 0; i < 5 - ratedUpon5; i++) {
        const ratedStar = <i class="far fa-star"></i>;
        ratingCollection = [...ratingCollection, ...[ratedStar]];
    }
    return ratingCollection;
}
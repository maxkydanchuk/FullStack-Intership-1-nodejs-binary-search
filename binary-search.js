function quickSort (dataset, property, order) {
    if(dataset.length <= 1) {
        return dataset;
    }

    let middleIndex = Math.floor(dataset.length / 2);
    let middleElement = dataset[middleIndex][property];
    let left = [];
    let right = [];

    for (let i = 0; i < dataset.length; i++) {
        if (i === middleIndex) {
            continue;
        }

        if(order === 'asc') {
            if(dataset[i][property] < middleElement) {
                left.push(dataset[i]);
            } else {
                right.push(dataset[i]);
            }
        }
        if(order === 'desc') {
            if(dataset[i][property] > middleElement) {
                left.push(dataset[i]);

            } else {
                right.push(dataset[i]);
            }
        }
    }
    return [...quickSort(left, property, order), dataset[middleIndex], ...quickSort(right, property, order)];
}

function binarySearch(dataset, property, query) {
    let middle;
    let searchResult = [];

    while(true) {
        middle = dataset.length !== 1 ? Math.floor(dataset.length / 2) : 0;
        if(dataset[middle][property] === query) {
            searchResult.push(dataset[middle]);

            for (let i = middle + 1; i < dataset.length; i++) {
                if (dataset[i][property] === query) {
                    searchResult.push(dataset[i]);
                } else break;
            }
            for (let i = middle - 1; i >= 0; i--) {
                if (dataset[i][property] === query) {
                    searchResult.push(dataset[i]);
                } else break;
            }
            return searchResult;
        } else {
            if (dataset[middle][property] < query) {
                dataset = dataset.slice(middle, dataset.length);
            } else {
                dataset = dataset.slice(0, middle);
            }
        }
        if (middle === 0) {
            return searchResult;
        }
    }
}

module.exports = {
    quickSort,
    binarySearch
};

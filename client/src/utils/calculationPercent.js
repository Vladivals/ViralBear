const calculationPercent = ProgressEvent => {
    return Math.round(ProgressEvent.loaded / ProgressEvent.total * 100);
};
export {calculationPercent}

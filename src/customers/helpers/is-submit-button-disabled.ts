export const isSubmitButtonDisabled = (
    initialInputs: { [key: string]: string },
    updatedInputs: { [key: string]: string }
): boolean => {
    return Object.keys(initialInputs).every(
        (key) => initialInputs[key] === updatedInputs[key]
    );
};

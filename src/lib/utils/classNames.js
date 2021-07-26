export default function classNames(classNameObject) {
    return Object.entries(classNameObject)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(" ");
}
export default function getCurrentSharePrice(classSlug, shareClasses) {        
    let result = false;

    shareClasses.forEach((shareClass) => {
        if(shareClass.classSlug === classSlug) {
            shareClass.classData.forEach((element) => {
                if(element.dataSlug === 'currentPrice') {
                    result = element.data.slice(1);
                }
            })
        }
    });
    return result;
}
import store from '../../store';

export default function getCurrentSharePrice(classSlug) {    
    const shareClasses = store.getState().investment.companyData.shareClasses;
    
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
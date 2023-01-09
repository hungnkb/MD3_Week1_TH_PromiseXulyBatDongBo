// nếu kayo ko ốm -> có bánh
// nếu kayo ốm -> ko có bánh 
// -> tổ chức sn

let kayoBirthday = (isKayoSick) => {
    let promise = new Promise(
        function (resolve, reject) {
            if (isKayoSick) {
                resolve();
            } else {
                reject(2);
            }
        }
    );
    return promise;
}


kayoBirthday(true)
    .then(() => { console.log('Kayo is sick') })
    .catch((data) => { console.log(`Kyo made ${data} cakes`) })
    .finally(() => { console.log('The party will be held') })



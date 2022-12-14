import React from "react";

const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = React.useState(initialValue);
    const [dataStatus,setDataStatus] = React.useState({loading:true,error:false})

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem =localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setDataStatus({...dataStatus,loading:false});

            } catch (error) {
                setDataStatus({...dataStatus,error:true})
            }

        }, 3000);
    }, []);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setDataStatus({...dataStatus,error:true})
        }
    }

    return {
        item,
        saveItem,
        dataStatus
    };
}

export { useLocalStorage };
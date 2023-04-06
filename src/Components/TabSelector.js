import React from 'react';
import styles from './TabSelector.module.css';


function TabSelector(props){

    function tabChangeHandler(event){
        const button = event.target.innerHTML;

        if(button === 'Done'){
            console.log("sexo")
            props.setPageHandler(2);
        }else{
            props.setPageHandler(1);
        }
    }

    var selected = `${styles.tab} ${styles.tabSelected}`;
    const notSelected = styles.tab;
    

    return(
        <div className={styles.tabsContainer}>
                <div onClick={tabChangeHandler} className={props.page === 1 ? selected : notSelected}>To do</div>
                <div onClick={tabChangeHandler} className={props.page === 2 ? selected : notSelected}>Done</div>
        </div>
    )
}

export default TabSelector
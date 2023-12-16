import React, { useState } from 'react';
import styles from './FilterModal.module.scss';

const hoursData = [
  { value: 'Открыто' },
  { value: 'Круглосуточно' },
  { value: 'Открыто в указанное время' },
]

const commonData = [
  { value: 'Можно с ноутбуком' },
  { value: 'Wi-Fi' },
  { value: 'Заказ навынос' },
  { value: 'Можно с собакой' },
  { value: 'Бизнес-ланч' },
  { value: 'Завтрак' },
  { value: 'Детский уголок' },
]

const availabilityData = [
  { value: 'Для людей с инвалидностью' },
]

type RatingOption = {
  value: string;
  label: string;
};

const ratingOptions: RatingOption[] = [
  { value: '4.9', label: '4,9' },
  { value: '4.5', label: '4,5' },
  { value: '4.0', label: '4,0' },
  { value: '3.5', label: '3,5' },
  { value: '3.0', label: '3,0' },
];

type CoffeeChains = {
  value: string;
  label: string;
};

const coffeeChains: CoffeeChains[] = [
  { value: 'Stars Coffee', label: 'Stars Coffee' },
  { value: 'Бодрый день', label: 'Бодрый день' },
  { value: 'ДаблБи', label: 'ДаблБи' },
  { value: 'Cinnabon', label: 'Cinnabon' },
  { value: 'Шоколадница', label: 'Шоколадница' },
  { value: 'CofeFest', label: 'CofeFest' },
  { value: 'Coffee Way', label: 'Coffee Way' },
  { value: 'One Prace Coffee', label: 'One Prace Coffee' },
  { value: 'Пронто', label: 'Пронто' },
];

type Prices = {
  value: string;
};

const prices: Prices[] = [
  { value: '₽'},
  { value: '₽₽' },
  { value: '₽₽₽'},
  { value: '₽₽₽₽'},
];

type Options = {
  value: string;
};

const options: Options[] = [
  { value: 'сохранить набор фильтров'},
];

const FilterModal: React.FC = ({}) => {

  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>(
    ratingOptions.reduce((acc, option) => {
      acc[option.value] = false;
      return acc;
    }, {})
  );

  const handleOnChange = (optionValue: string) => {
    setCheckedState(prevState => ({
      ...prevState,
      [optionValue]: !prevState[optionValue]
    }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15.7656 14.6336C15.8399 14.708 15.8988 14.7962 15.9391 14.8933C15.9793 14.9904 16 15.0945 16 15.1996C16 15.3047 15.9793 15.4088 15.9391 15.5059C15.8988 15.603 15.8399 15.6912 15.7656 15.7656C15.6912 15.8399 15.603 15.8988 15.5059 15.9391C15.4088 15.9793 15.3047 16 15.1996 16C15.0945 16 14.9904 15.9793 14.8933 15.9391C14.7962 15.8988 14.708 15.8399 14.6336 15.7656L8 9.13094L1.36637 15.7656C1.21626 15.9157 1.01268 16 0.8004 16C0.588121 16 0.384536 15.9157 0.234432 15.7656C0.0843276 15.6155 4.18453e-09 15.4119 0 15.1996C-4.18453e-09 14.9873 0.0843276 14.7837 0.234432 14.6336L6.86906 8L0.234432 1.36637C0.0843276 1.21626 0 1.01268 0 0.8004C0 0.588121 0.0843276 0.384536 0.234432 0.234432C0.384536 0.0843276 0.588121 0 0.8004 0C1.01268 0 1.21626 0.0843276 1.36637 0.234432L8 6.86906L14.6336 0.234432C14.7837 0.0843276 14.9873 -4.18453e-09 15.1996 0C15.4119 4.18453e-09 15.6155 0.0843276 15.7656 0.234432C15.9157 0.384536 16 0.588121 16 0.8004C16 1.01268 15.9157 1.21626 15.7656 1.36637L9.13094 8L15.7656 14.6336Z" fill="#2E2E2E"/>
        </svg>
        </button>
        <form>
          <div className={styles.header}>
            <h2 className={styles.title}>Фильтры</h2>
            <button className={styles.resetBtn} id="reset">Сбросить</button>
          </div>

          <div className={styles.fltrContainer}>
            <div className={styles.fltrContainerForTags}>
              {/* Время работы */}
              <div className={styles.hoursContainer}>
                <p className={styles.fltrTitle}>
                  Время работы
                </p>
                <ul className={styles.filtersTags}>
                  {hoursData.map((filter) => {
                    return (
                      <li className={styles.filter}>
                        <button className={styles.filterButton}>
                          {filter.value}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Общая информация */}
              <div className={styles.infoContainer}>
                <p className={styles.fltrTitle}>
                  Общая информация
                </p>
                <ul className={styles.filtersTags}>
                  {commonData.map((filter) => {
                    return (
                      <li className={styles.filter}>
                        <button className={styles.filterButton}>
                          {filter.value}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Доступная среда */}
              <div className={styles.availabilityContainer}>
                <p className={styles.fltrTitle}>
                  Доступная среда
                </p>
                <ul className={styles.filtersTags}>
                  {availabilityData.map((filter) => {
                    return (
                      <li className={styles.filter}>
                        <button className={styles.filterButton}>
                          {filter.value}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
              
            <div className={styles.fltrContainerForCheck}>
              {/* Рейтинг */}
              <div className={styles.raitingContainer}>
                <p className={styles.fltrTitle}>
                  Рейтинг
                </p>
                <ul className={styles.filtersCheck}>
                  {ratingOptions.map(option => (
                    <li className={styles.filter}>
                      <label key={option.value} className={styles.ratingOption}>
                      <input 
                        className={styles.checkBox} 
                        type="checkbox"
                        checked={checkedState[option.value]}
                        onChange={() => handleOnChange(option.value)}
                      />
                      <span 
                        className={`${styles.newCheckBox} ${checkedState[option.value] ? styles.checked : ''}`}
                      >
                      </span>
                      <span className={styles.ratingText}>
                        От <span className={styles.star}></span> {option.label} 
                      </span>
                    </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Сети */}
              <div className={styles.chainContainer}>
                <p className={styles.fltrTitle}>
                  Сети
                </p>
                <ul className={styles.filtersCheck}>
                  {coffeeChains.map(option => (
                    <li className={styles.filter}>
                      <label key={option.value} className={styles.chainOption}>
                        <input 
                          className={styles.checkBox} 
                          type="checkbox"
                          checked={checkedState[option.value]}
                          onChange={() => handleOnChange(option.value)}
                        />
                        <span 
                          className={`${styles.newCheckBox} ${checkedState[option.value] ? styles.checked : ''}`}
                        >
                        </span>
                        <span>
                          {option.label} 
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Цены */}
            <div className={styles.priceContainer}>
              <p className={styles.fltrTitle}>
                Цены
              </p>
              <ul className={styles.filtersTags}>
                  {prices.map((price) => {
                    return (
                      <li className={styles.filter}>
                        <button className={styles.filterButton}>
                          {price.value}
                        </button>
                      </li>
                    );
                  })}
                </ul>
            </div>


            <ul className={styles.filtersCheck}>
              {options.map(option => (
                <li className={styles.filter}>
                  <label key={option.value} className={styles.saveFilters}>
                    <input 
                      className={styles.checkBox} 
                      type="checkbox"
                      checked={checkedState[option.value]}
                      onChange={() => handleOnChange(option.value)}
                    />
                    <span 
                      className={`${styles.newCheckBox} ${checkedState[option.value] ? styles.checked : ''}`}
                    >
                    </span>
                    <span>
                      {option.value} 
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.btnsContainer} >
            <button className={styles.applyBtn}>Применить фильтр</button>
            <button className={styles.cancelBtn}>Отмена</button>
          </div>
        </form>
      </div>
    </div >
  );
}

export default FilterModal;

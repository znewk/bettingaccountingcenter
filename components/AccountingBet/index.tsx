'use client';
import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { useAccountingBetStore } from '../../store/useAccountingBetStore';
import styles from '../../styles/accountingBet.module.css';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

const AccountingBet: React.FC = () => {
  const { accountingBetData, load } = useAccountingBetStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    load()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        console.log('catch');
      });
  }, [load]);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    fullname: { value: null, matchMode: FilterMatchMode.CONTAINS },
    iin: { value: null, matchMode: FilterMatchMode.CONTAINS },
    betsName: { value: null, matchMode: FilterMatchMode.CONTAINS },
    walletId: { value: null, matchMode: FilterMatchMode.CONTAINS },
    betId: { value: null, matchMode: FilterMatchMode.CONTAINS },
    event: { value: null, matchMode: FilterMatchMode.CONTAINS },
    eventDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
    eventCategory: { value: null, matchMode: FilterMatchMode.CONTAINS },
    betOutcome: { value: null, matchMode: FilterMatchMode.CONTAINS },
    coefficient: { value: null, matchMode: FilterMatchMode.CONTAINS },
    betResult: { value: null, matchMode: FilterMatchMode.CONTAINS },
    status: { value: null, matchMode: FilterMatchMode.CONTAINS },
    winingAmout: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [startDate, setStartDate] = useState<Date>(yesterday);
  const [endDate, setEndDate] = useState<Date>(tomorrow);

  addLocale('ru', {
    firstDayOfWeek: 1,
    dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    dayNamesShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: 'Сегодня',
    clear: 'Очистить'
  });

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.inputs}>
          <div className="flex-auto">
            <span style={{ marginRight: 10 }}>Поиск данных</span>
            <Calendar id="buttondisplay" value={startDate} onChange={(e) => setStartDate(e.value as Date)} showIcon locale='ru' />
            <span className='pi pi-angle-right' style={{ margin: "0 10px" }}></span>
            <Calendar id="buttondisplay" value={endDate} onChange={(e) => setEndDate(e.value as Date)} showIcon locale='ru' />
          </div>
        </div>

        <div className={styles.buttons}>
          <Button label='Поиск' icon="pi pi-search" className={styles.button} />

          <Button label="Экспорт" icon="pi pi-window-maximize" severity="success" />
        </div>
      </div>
      {loading ? (
        <Skeleton width="100%" height="60vh" />
      ) : (
        <div className={styles.tableBody}>
          <DataTable value={accountingBetData}
            removableSort
            paginator rows={10}
            filters={filters} loading={loading}
            style={{ borderRadius: 15 }}
            rowsPerPageOptions={[5, 10, 25, 50]}
          >
            <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
            <Column field="fullname" header="ФИО Беттера" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
            <Column field="iin" header="ИИН Беттера" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
            <Column field="betsName" header="БК" sortable filter filterPlaceholder="Поиск"></Column>
            <Column field="walletId" header="ID Кошелька" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
            <Column field="betId" header="ID Ставки" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
            <Column field="event" header="Событие" sortable filter filterPlaceholder="Поиск"></Column>
            <Column field="eventDate" header="Дата события" sortable filter filterPlaceholder="Поиск"></Column>
            <Column field="eventCategory" header="Категория события" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
            <Column field="betOutcome" header="Ставка" sortable filter filterPlaceholder="Поиск"></Column>
            <Column field="coefficient" header="Коэфициент" sortable filter filterPlaceholder="Поиск"></Column>
            <Column field="betResult" header="Исход ставки" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
            <Column field="status" header="Статус" sortable filter filterPlaceholder="Поиск"></Column>
            <Column field="winingAmout" header="Сумма выигрыша" sortable filter filterPlaceholder="Поиск"></Column>
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default AccountingBet;

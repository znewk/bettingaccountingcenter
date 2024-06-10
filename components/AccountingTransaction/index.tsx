'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames'
import { AppDispatch, RootState } from '../../store/store';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { load } from '../../store/slices/accountingTransactionSlice';
import styles from '../../styles/accountingBet.module.css'
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';


const AccountingTransaction: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    // const [accountingBetData, setAccountingBetData] = useState<AccountingBetType[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        dispatch(load())
            .then(() => {
                    setLoading(false)}
                )  
            .catch(() => {
                setLoading(false)
                console.log('catch')
            });
    }, []);

    const accountingTransactionData = useSelector((state: RootState) => state.accountingTransaction.accountingTransactionData);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        fullname: { value: null, matchMode: FilterMatchMode.CONTAINS },
        iin: { value: null, matchMode: FilterMatchMode.CONTAINS },
        walletId: { value: null, matchMode: FilterMatchMode.CONTAINS },
        betId: { value: null, matchMode: FilterMatchMode.CONTAINS },
        transactionType: { value: null, matchMode: FilterMatchMode.CONTAINS },
        amount: { value: null, matchMode: FilterMatchMode.CONTAINS },
        betsName: { value: null, matchMode: FilterMatchMode.CONTAINS },
        BVU: { value: null, matchMode: FilterMatchMode.CONTAINS },
        accountNumber: { value: null, matchMode: FilterMatchMode.CONTAINS },
        operationDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [startDate, setStartDate] = useState<Date>(yesterday);
    const [endDate, setEndDate] = useState<Date>(tomorrow);

    addLocale('ru', {
        firstDayOfWeek: 1,
        dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
        dayNamesShort: ["Вск","Пнд","Втр","Срд","Чтв","Птн","Сбт"],
        dayNamesMin: ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
        monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
        monthNamesShort: ["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
        today: 'Сегодня',
        clear: 'Очистить'
    });

    return (
        <div>
            <div className={styles.filters}>
                <div className={styles.inputs}>
                    <div className="flex-auto">
                        <span style={{marginRight: 10}}>Поиск данных</span>
                        <Calendar id="buttondisplay" value={startDate} onChange={(e) => setStartDate(e.value as Date)} showIcon locale='ru' />
                        <span className='pi pi-angle-right' style={{margin: "0 10px"}}></span>
                        <Calendar id="buttondisplay" value={endDate} onChange={(e) => setEndDate(e.value as Date)} showIcon locale='ru' />
                    </div>
                </div>

                <div className={styles.buttons}>
                    <Button label='Поиск' icon="pi pi-search" className={styles.button}/>

                    <Button label="Экспорт" icon="pi pi-window-maximize" severity="success" />
                </div>
            </div>
            {loading ? (
                <Skeleton width="100%" height="60vh" />
            ) : (
                <div className={styles.tableBody}>
                    <DataTable value={accountingTransactionData} 
                        removableSort
                        paginator rows={10}
                        filters={filters} loading={loading}
                        style={{borderRadius: 15}}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                    >
                        <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
                        <Column field="fullname" header="ФИО Беттера" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="iin" header="ИИН Беттера" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="walletId" header="ID Кошелька" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="betId" header="ID Ставки" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="transactionType" header="Тип операции" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="amount" header="Сумма" sortable filter filterPlaceholder="Поиск"></Column>
                        <Column field="betsName" header="БК" sortable filter filterPlaceholder="Поиск"></Column>
                        <Column field="BVU" header="БВУ" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="accountNumber" header="Номер счета" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                        <Column field="operationDate" header="Дата операции" sortable filter filterPlaceholder="Поиск" style={{ minWidth: '13rem' }}></Column>
                    </DataTable>
                </div>
            )}
        </div>
    )
}

export default AccountingTransaction;

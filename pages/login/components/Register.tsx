import React, { } from 'react';

// Components
import { Table } from "@shared/proxies/Table"

import { IActionsTable, IColumn } from '@interfaces/Iproxies';

export const Register: React.FC = () => {

    const pe: IColumn[] = [ {name: "cris", value:'1'}, {name: "cris", value:'5'}]

    return (
        <>
            <Table colums={pe} />
        </>
    )
}


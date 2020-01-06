import React from 'react'
import ConsumptionBox from '../../ConsumptionBox'
import classes from './Content.module.scss'
import DoughnutChart from './DoughnutChart'

export default function Content() {
    return (
        <div className={classes.content}>
            <div className={`row ${ classes["section-list"] }`}>
                <div className={`col-4 ${classes.section}`}>
                    <ConsumptionBox type="water">
                        10000
                    </ConsumptionBox>

                    <div className="row">
                        <div className="col">
                            <DoughnutChart/>
                        </div>
                    </div>
                </div>

                <div className={`col-4 ${classes.section}`}>
                    <ConsumptionBox type="electricity">
                        10000
                    </ConsumptionBox>
                    
                    <div className="row">
                        <div className="col">
                            <DoughnutChart/>
                        </div>
                    </div>
                </div>

                <div className={`col-4 ${classes.section}`}>
                    <ConsumptionBox type="heat">
                        10000
                    </ConsumptionBox>

                    <div className="row">
                        <div className="col">
                            <DoughnutChart/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="row">
                <ul className={classes['chart-legend']}>
                    <li className={`${classes['legend-item']} ${classes['legend-item--blue-border']}`}>Северный флот</li>
                    <li className={`${classes['legend-item']} ${classes['legend-item--red-border']}`}>Западный военный округ</li>
                    <li className={`${classes['legend-item']} ${classes['legend-item--brown-border']}`}>Южный военный округ</li>
                    <li className={`${classes['legend-item']} ${classes['legend-item--green-border']}`}>Центральный военный округ</li>
                    <li className={`${classes['legend-item']} ${classes['legend-item--yellow-border']}`}>Восточный военный округ</li>
                </ul>
            </div>
        </div>
    )
}

import { createSignal, onMount } from 'solid-js';
import { customElement } from 'solid-element';
import * as echarts from 'echarts';
import { TAG_PREFIX } from './config';
import styles from './Chart.css?inline';

export type Props = {
    title: string;
    dimensions: string[];
    source: any[];
};
let resizeObserver;
export const Chart = (props: Props, { element }: any) => {
    const [chartRef, setChartRef] = createSignal<HTMLElement>();
    const getBaseOption = () => {
        return {
            grid: {
                top: 30,
                left: 10,
                right: 10,
                bottom: 15,
                containLabel: true,
            },
            legend: {},
            tooltip: {},
            dataset: {
                dimensions: props.dimensions,
                source: props.source,
            },
        };
    };
    onMount(() => {
        // 监听dom变化
        if (!chartRef()) return;
        renderChart(getBarOption());
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(chartRef() as HTMLElement);
    });
    const getBarOption = () => {
        return {
            ...getBaseOption(),
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'bar' }],
        };
    };
    const getLineOption = () => {
        return {
            ...getBaseOption(),
            xAxis: { type: 'category' },
            yAxis: {},
            series: [{ type: 'line' }],
        };
    };
    const renderChart = (option: any) => {
        if (!chartRef()) return;
        let chart = echarts.getInstanceByDom(chartRef() as HTMLElement);
        if (!chart) {
            chart = echarts.init(chartRef());
        }
        chart.setOption(option, true);
    };
    const changeType = (type: string) => {
        switch (type) {
            case 'bar':
                renderChart(getBarOption());
                break;
            case 'line':
                renderChart(getLineOption());
                break;
            default:
                break;
        }
    };
    const handleResize = () => {
        if (!chartRef()) return;
        const chart = echarts.getInstanceByDom(chartRef() as HTMLElement);
        if (chart) {
            chart.resize();
        }
    };
    return (
        <>
            <style>{styles}</style>
            <div class="chart-card">
                <div class="chart-title">
                    <span>{props.title}</span>
                    <div class="chart-action">
                        <ar-icon name="chart-bar" onClick={() => changeType('bar')}></ar-icon>
                        <ar-icon name="chart-line" onClick={() => changeType('line')}></ar-icon>
                    </div>
                </div>
                <div ref={setChartRef} class="chart-content"></div>
            </div>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-chart`, { dimensions: [], source: [], title: '' }, Chart);
};

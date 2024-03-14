import { customElement } from 'solid-element';

import { TAG_PREFIX } from './config';

import styles from './ImageCard.css?inline';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const Card = (props: CardProps) => {
    return (
        <>
            <style>{styles}</style>
            <div class="card">
                {props.imageUrl && <img class="card-image" src={props.imageUrl} />}
                <div class="card-info">
                    <div class="card-title">{props.title}</div>
                    <div class="card-description">{props.description}</div>
                </div>
            </div>
        </>
    );
};

export default () => {
    customElement(`${TAG_PREFIX}-image-card`, { title: '', description: '', imageUrl: '' }, Card);
};

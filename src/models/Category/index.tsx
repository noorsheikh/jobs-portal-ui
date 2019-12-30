import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface Category {
    id: number;
    name: string;
    description: string;
    total: number;
    icon: IconProp;
}

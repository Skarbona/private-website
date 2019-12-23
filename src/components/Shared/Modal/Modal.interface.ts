export interface ModalInterface {
    onClose(): void;
    openClass?(): void;
    children: any;
    style?: {
        [key: number]: string;
    }
}
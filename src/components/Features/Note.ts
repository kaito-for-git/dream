import type React from "react";

//ノートのIdをまとめて同じ方にする
export type noteId = string

//選択されたノートのIDのprops
export type selectedIdProps = noteId | null;

//ノートのインターフェース
export interface Note{
    id:noteId;
    title:string;
    content:string;
    created:number;
    updated:number;
}



 export type selectNoteIdProps = {
    selectedId : selectedIdProps;
}

//useState()を受け取り内容を変更する
export type noteProps = {
    notes : Note[];
    onSelect: (id: string) => void;
}
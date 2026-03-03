import type React from "react";

//ノートのIdをまとめて同じ方にする
export type NoteId = string

//選択されたノートのIDのprops
export type SelectedIdProps = NoteId | null;

//ノートのインターフェース
export interface Note{
    id:NoteId;
    title:string;
    content:string;
    created:number;
    updated:number;
}



 export type SelectNoteIdProps = {
    selectedId : SelectedIdProps;
}

//useState()を受け取り内容を変更する
export type NoteProps = {
    notes : Note[];
    onSelect: (id: string) => void;
}
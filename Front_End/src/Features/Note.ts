import type React from "react";

//ノートのインターフェース
export interface Note{
    id:NoteId;
    title:string;
    content:string;
    created:number;
    updated:number;
}

//ノートput時の型
export interface putNote{
    title:String;
    content:String;
    updated:number;
}

//ノートのIdをまとめて同じ型にする
export type NoteId = string;

//選択されたノートのコピーデータ
export type CopyNote = Note | null;

export type MainContentProps = {
    editNote : CopyNote;
    setEditNote : React.Dispatch<React.SetStateAction<CopyNote>>;
    saveHandler: () => void;
}

//useState()を受け取り内容を変更する
export type SideBarProps = {
    notes : Note[];
    editNote : CopyNote;
    setEditNote:React.Dispatch<React.SetStateAction<Note | null>>;
    createHandler:() => void;
    deleteHandler:(selectedIds:string[]) =>  void;
}
import {useState} from "react";
import type{ Note } from "../Features/Note";

export const useSideBar = (editNote:Note | null,setEditNote:(value:Note | null) => void,deleteHandler:(selectedIds:string[]) => void) =>{

    const [isOpen,setIsOpen] = useState(false);                         //サイドバーの状態
    const [isDeleteMode,setIsDeleteMode] = useState<boolean>(false);    //削除モードの状態
    const [selectedIds,setSelectedIds] = useState<string[]>([]);        //選択されたノートを持つ関数

    //削除モードで使用したuseStateの値を初期値に戻す
    const setInit = () => {
        setIsDeleteMode(false);
        setSelectedIds([]);
    };

    // 削除ボタンの挙動：1回目で削除モードON、2回目で選択したノートを実際に削除
    const onDeleteButtonClick = () => {
        if (!isDeleteMode) {
            setIsDeleteMode(true);
        }else{
            deleteHandler(selectedIds);
            setInit();
        }
    }

    //ノート一つ一つのボタンスタイルを"削除モード or 選択モード(通常モード(何もない状態))"で分ける
    const getNoteButtonStyle = (id:string) =>{
        const isSelected = isDeleteMode 
            ? selectedIds.includes(id) 
            : editNote?.id === id;

        return `Notes-Style ${isDeleteMode ? 'Delete-Mode' : ''} ${isSelected ? 'selected' : ''}`;
    };
    
    /*
     * ノートクリック時の処理
     * 削除モード：選択状態の切り替え / 通常モード：編集対象に設定
     */
    const onSelectNote = (note:Note) =>{
        isDeleteMode                                                        //削除モード
        ?selectedIds.find(n => n === note.id)
            ?setSelectedIds(prev => prev.filter(ids => ids !== note.id))    //選択を解除したいとき
            :setSelectedIds(prev => [...prev,note.id])                      //ケツからpush
        :setEditNote({ ...note })
    }
    
    //更新日時を"月/日/時/分"に変更する
    const getMDHM  = (mdhm :number) => {
        return new Date(mdhm).toLocaleString('jp-JP', {
        month: 'numeric',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        })
    }
    
    return {
        isOpen,
        setIsOpen,
        isDeleteMode,
        onDeleteButtonClick,
        getNoteButtonStyle,
        onSelectNote,
        getMDHM
    };
}
import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FolderSvg from "@assets/IconPack/folder.svg";
import CloseSvg from "@assets/Common/cross.svg";
import { useDropzone } from "react-dropzone";
import BTN from "@components/fontSystem/Button/Button";
import { D2 } from "@components/fontSystem/Description/Description";

const FileDropInput = ({
    onChange,
    textPlaceholder,
    disabled,
    isSent,
    error,
}) => {
    const [myFiles, setMyFiles] = useState([]);
    const [dragOver, setDragOver] = useState(false);
    const [isError, setError] = useState(false);
    const [errType, setErrType] = useState("");

    const errorTexts = {
        too_many: "Можно добавить только один файл.",
        general: "Файл слишком большой, максимальный размер 24 Мб",
    };

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (rejectedFiles.length) {
            // console.log("🚀 ~ file: FileDropInput.js ~ line 17 ~ onDrop ~ rejectedFiles.length", rejectedFiles.length)
            setError(true);
            if (rejectedFiles.length > 1) {
                setErrType("too_many");
            } else {
                // fileRejections
                setErrType("general");
            }

            setDragOver(false);
        } else {
            setMyFiles([...myFiles, ...acceptedFiles]);
            onChange([...myFiles, ...acceptedFiles]);
        }
    });

    const onDragEnter = useCallback(() => {
        setDragOver(true);
        setError(false);
    });

    const onDragLeave = useCallback(() => {
        setDragOver(false);
    });

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        maxSize: 25165824,
        onDrop,
        onDragEnter,
        onDragLeave,
    });

    const removeFile = (file) => () => {
        const newFiles = [...myFiles];
        newFiles.splice(newFiles.indexOf(file), 1);
        setMyFiles(newFiles);
        onChange(newFiles);
        setDragOver(false);
    };
    useEffect(() => {
        if (!isSent) return;
        setMyFiles([]);
    }, [isSent]);

    const files = myFiles.map((file) => (
        <div key={file.path} className="file-field">
            <div className="file-field-wrap">
                <FolderSvg className="file-field__icon" />

                <div className="file-field__text">
                    <BTN>{file.name}</BTN>
                </div>
            </div>

            <div className="file-delete" onClick={removeFile(file)}>
                <CloseSvg />
            </div>
        </div>
    ));

    return (
        <div
            className={`file-drop ${disabled ? "disabled" : ""} ${
                myFiles.length ? "wFiles" : ""
            }`}
        >
            <div className="file-drop__container">
                {myFiles.length ? (
                    files
                ) : (
                    <div
                        {...getRootProps({
                            className: `file-drop__dropzone ${
                                dragOver ? "file-drop__dropzone--active" : ""
                            } ${error ? "file-drop__dropzone--error" : ""}`,
                        })}
                    >
                        <input {...getInputProps()} />
                        <BTN>
                            {dragOver
                                ? "Перетащите сюда файл"
                                : textPlaceholder}
                        </BTN>
                    </div>
                )}
                {!!error && (
                    <div className="file-drop__dropzone--error">
                        <D2>{error}</D2>
                    </div>
                )}
            </div>

            {!myFiles.length && (
                <div
                    className={`file-drop__subtext ${
                        isError ? "file-drop__subtext--error" : ""
                    }`}
                >
                    <D2>
                        {isError
                            ? errorTexts[errType]
                            : "Можно загрузить один файл размером не больше 24 Мб"}
                    </D2>
                </div>
            )}
        </div>
    );
};

FileDropInput.propTypes = {
    onChange: PropTypes.func,
    textPlaceholder: PropTypes.string,
    disabled: PropTypes.bool,
};

FileDropInput.defaultProps = {
    textPlaceholder: "Добавить файл",
    disabled: false,
};

export default FileDropInput;

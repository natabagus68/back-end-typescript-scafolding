/*
 * Type definitions for ExcelJS
 * Project: https://github.com/guyonroche/exceljs
 * Definitions by: Rycochet https://github.com/Rycochet
 *
 * This is a WIP
 */
declare namespace ExcelJS {
    type Zip = any;
    type Stream = any;
    type Model = any;

    export const enum PageSize {
        LETTER = 0,
        LEGAL = 5,
        EXECUTIVE = 7,
        A4 = 9,
        A5 = 11,
        B5 = 13,
        JIS = 13,
        ENVELOPE_10 = 20,
        ENVELOPE_DL = 27,
        ENVELOPE_C5 = 28,
        ENVELOPE_B5 = 34,
        ENVELOPE_Monarch = 37,
        DOUBLE_JAPAN_POSTCARD_ROTATED = 82,
        _16K_197X273 = 119,
    }

    /**
     * between	Values must lie between formula results
     * notBetween	Values must not lie between formula results
     * equal	Value must equal formula result
     * notEqual	Value must not equal formula result
     * greaterThan	Value must be greater than formula result
     * lessThan	Value must be less than formula result
     * greaterThanOrEqual	Value must be greater than or equal to formula result
     * lessThanOrEqual	Value must be less than or equal to formula result
     */
    export type Operator =
        | "between"
        | "notBetween"
        | "equal"
        | "notEqual"
        | "greaterThan"
        | "lessThan"
        | "greaterThanOrEqual"
        | "lessThanOrEqual";

    export type PatternStyles =
        | "none"
        | "solid"
        | "darkVertical"
        | "darkGray"
        | "mediumGray"
        | "lightGray"
        | "gray125"
        | "gray0625"
        | "darkHorizontal"
        | "darkVertical"
        | "darkDown"
        | "darkUp"
        | "darkGrid"
        | "darkTrellis"
        | "lightHorizontal"
        | "lightVertical"
        | "lightDown"
        | "lightUp"
        | "lightGrid"
        | "lightTrellis"
        | "lightGrid";

    export type BorderStyles =
        | "thin"
        | "dotted"
        | "dashDot"
        | "hair"
        | "dashDotDot"
        | "slantDashDot"
        | "mediumDashed"
        | "mediumDashDotDot"
        | "mediumDashDot"
        | "medium"
        | "double"
        | "thick";

    export interface View {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        firstSheet?: number;
        activeTab?: number;
        visibility?: "visible";
        xSplit?: number;
        ySplit?: number;
    }

    export interface WorkbookProperties {
        tabColor?: Color;
        showGridLines?: boolean;
        views?: View[];
        date1904?: boolean;
        outlineLevelCol?: number;
        outlineLevelRow?: number;
    }

    export interface WorksheetProperties {
        /**
         * The worksheet column outline level
         */
        outlineLevelCol: number;
        /**
         * The worksheet row outline level
         */
        outlineLevelRow: number;
        /**
         * Default row height
         */
        defaultRowHeight: number;
        /**
         * TBD
         */
        dyDescent: number;
    }

    export interface WorksheetViews {
        /**
         * Controls the view state - one of normal, frozen or split
         */
        state: "normal" | "frozen" | "split";
        /**
         * The currently selected cell
         */
        activeCell: string;
        /**
         * Shows or hides the ruler in Page Layout
         */
        showRuler: boolean;
        /**
         * Shows or hides the row and column headers (e.g. A1, B1 at the top
         * and 1,2,3 on the left
         */
        showRowColHeaders: boolean;
        /**
         * Shows or hides the gridlines (shown for cells where borders have not
         * been defined)
         */
        showGridLines: boolean;
        /**
         * Percentage zoom to use for the view
         */
        zoomScale: number;
        /**
         * Normal zoom for the view
         */
        zoomScaleNormal: number;
        /**
         * Presentation style - one of pageBreakPreview or pageLayout. Note
         * pageLayout is not compatable with frozen views
         */
        style: "pageBreakPreview" | "pageLayout";
    }

    export interface WorksheetFrozenViews extends WorksheetViews {
        /**
         * Controls the view state - one of normal, frozen or split
         */
        state: "frozen";
        /**
         * How many columns to freeze. To freeze rows only, set this to 0 or
         * undefined
         */
        xSplit: number;
        /**
         * How many rows to freeze. To freeze columns only, set this to 0 or
         * undefined
         */
        ySplit: number;
        /**
         * Which cell will be top-left in the bottom-right pane. Note: cannot
         * be a frozen cell. Defaults to first unfrozen cell
         */
        topLeftCell: string;
    }

    export interface WorksheetSplitViews extends WorksheetViews {
        /**
         * Controls the view state - one of normal, frozen or split
         */
        state: "split";
        /**
         * How many points from the left to place the splitter. To split
         * vertically, set this to 0 or undefined
         */
        xSplit: number;
        /**
         * How many points from the top to place the splitter. To split
         * horizontally, set this to 0 or undefined
         */
        ySplit: number;
        /**
         * Which cell will be top-left in the bottom-right pane.
         */
        topLeftCell: string;
        /**
         * Which pane will be active - one of topLeft, topRight, bottomLeft and
         * bottomRight
         */
        activePane: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    }

    export const enum ValueType {
        Null = 0,
        Merge = 1,
        Number = 2,
        String = 3,
        Date = 4,
        Hyperlink = 5,
        Formula = 6,
        SharedString = 7,
        RichText = 8,
    }

    export interface Font {
        bold?: boolean;
        charset?: number;
        color: Color;
        family?: number;
        italic?: boolean;
        name?: string;
        outline?: boolean;
        scheme?: "none" | "minor" | "major";
        size?: number;
        strike?: boolean;
        underline?: boolean | "none" | "single" | "double" | "singleAccounting" | "doubleAccounting";
    }

    export interface Alignment {
        horizontal?: "left" | "center" | "right" | "fill" | "justify" | "centerContinuous" | "distributed";
        vertical?: "top" | "middle" | "bottom" | "distributed" | "justify";
        wrapText?: boolean;
        indent?: number;
        readingOrder?: "rtl" | "ltr";
        textRotation?: "vertical" | number;
    }

    export interface Color {
        argb: string;
    }

    export interface Border {
        up?: boolean;
        down?: boolean;
        left?: boolean;
        right?: boolean;
        style?: BorderStyles;
        color?: Color;
    }

    export interface Stop {
        position: number;
        color: Color;
    }

    export interface FillPattern {
        type: "pattern";
        pattern: PatternStyles;
        fgColor: Color;
        bgColor: Color;
    }

    export interface FillGradientAngle {
        type: "gradient";
        gradient: "angle";
        degree: 0 | 45 | 90 | 135;
        stops: Stop[];
    }

    export interface FillGradientPath {
        type: "gradient";
        gradient: "path";
        center: { left: number; top: number };
        stops: Stop[];
    }

    export type Fill = FillPattern | FillGradientAngle | FillGradientPath;

    export interface Style {
        numFmt: string;
        font: Font;
        alignment: Alignment;
        border: Border;
        fill: Fill;
    }

    export interface DataValidationList {
        type: "list";
        allowBlank: boolean;
        /**
         * ['"One,Two,Three,Four"']
         * ['$D$5:$F$5']
         */
        formulae: string[];
    }

    export interface DataValidationWhole {
        type: "whole";
        operator: Operator;
        showErrorMessage: boolean;
        formulae: number[];
        errorStyle: string;
        errorTitle: string;
        error: string;
    }

    export interface DataValidationDecimal {
        type: "decimal";
        operator: Operator;
        allowBlank: boolean;
        showInputMessage: boolean;
        formulae: number[];
        promptTitle: string;
        prompt: string;
    }

    export interface DataValidationTextLength {
        type: "textLength";
        operator: Operator;
        showErrorMessage: boolean;
        allowBlank: boolean;
        formulae: number[];
    }

    export interface DataValidationDate {
        type: "date";
        operator: Operator;
        showErrorMessage: boolean;
        allowBlank: boolean;
        formulae: Date[];
    }

    export type DataValidation =
        | DataValidationList
        | DataValidationWhole
        | DataValidationDecimal
        | DataValidationTextLength
        | DataValidationDate;

    export interface Address {
        address: string;
        col: number;
        row: number;
        sheetName: string;
    }

    export interface Cell extends Style {
        readonly workbook: Workbook;
        readonly worksheet: Sheet;

        /**
         * Modify/Add individual cell
         */
        value: any;

        readonly text: string;

        readonly toCsvString: string;

        readonly address: string;
        readonly row: number;
        readonly col: number;
        readonly $col$row: string;

        /**
         * Query a cell's type
         */
        readonly type: ValueType;

        readonly effectiveType: ValueType;

        readonly isMerged: boolean;

        readonly fullAddress: Address;

        merge(master: Cell): void;
        unmerge(): void;
        isMergedTo(master: Cell): boolean;
        readonly master: Cell;

        readonly isHyperlink: boolean;
        readonly hyperlink: string;

        /*
         * Style
         */
        style: Style;

        /**
         * Individual cells (or multiple groups of cells) can have names
         * assigned to them. The names can be used in formulas and data
         * validation (and probably more).
         */
        name: string;

        /**
         * Cells can define what values are valid or not and provide prompting
         * to the user to help guide them.
         */
        dataValidation: DataValidation;
    }

    export interface Column extends Style {
        readonly workbook: Workbook;
        readonly worksheet: Sheet;

        readonly number: number;
        readonly letter: string;

        readonly isCustomWidth: boolean;

        defn: {
            header: string;
            key: string;
            width: number;
            style: Style;
            hidden: boolean;
            outlineLevel: number;
        };

        readonly headers: string[];

        /**
         * Check if any custom size or style
         */
        readonly isDefault: boolean;

        /**
         * The width of the column, this is the only value to be saved
         */
        width: number;

        /**
         * A convenience value for finding columns by name (must not match a
         * column letter)
         */
        key: string;

        /**
         * The value of the top cell in the column
         */
        header: string;

        /**
         * Is the column hidden from view
         */
        hidden: boolean;

        /**
         * Set an outline level for columns
         */
        outlineLevel: number;

        /**
         * Columns support a readonly field to indicate the collapsed state
         * based on outlineLevel
         */
        readonly collapsed: boolean;

        /**
         * Check if same size, visibility and style
         */
        equivalentTo?(other: Column): boolean;

        /**
         * Iterate over all current cells in this column
         */
        eachCell(callback: (cell: Cell, rowNumber: number) => void): void;
        eachCell(options: { includeEmpty: boolean }, callback: (cell: Cell, rowNumber: number) => void): void;

        /**
         * cut one or more columns (columns to the right are shifted left)
         * If column properties have been defined, they will be cut or moved accordingly
         * Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
         */
        spliceColumns(start: number, count: number, ...insert: Cell[][]): void;
    }

    export interface Row extends Style {
        readonly workbook: Workbook;
        readonly worksheet: Sheet;

        /**
         * Return the row number
         */
        readonly number: number;

        /**
         * A sparse array of cell values
         */
        values: any[] | { [key: string]: any };

        /**
         * Returns true if the row includes at least one cell with a value
         */
        readonly hasValues: boolean;

        /**
         * Number of cells in this row
         */
        readonly cellCount: number;

        /**
         * Number of non-empty cells in this row
         */
        readonly actualCellCount: number;

        /**
         * Get the min and max column number for the non-null cells in this row
         * or null
         */
        readonly dimensions: null | { min: number; max: number };

        /**
         * The height of the row, this is the only value to be saved
         */
        height: number;

        /**
         * Set an outline level for columns
         */
        outlineLevel: number;

        /**
         * Columns support a readonly field to indicate the collapsed state
         * based on outlineLevel
         */
        readonly collapsed: boolean;

        /**
         * Assign row values by object, using column keys
         */
        value: { [columnId: string]: any } | any[];

        /**
         * Returns the cell at col.
         * If not found, return undefined
         */
        findCell(col: number): Cell | undefined;

        /**
         * Inform Streaming Writer that this row (and all rows before it) are
         * complete and ready to write. Has no effect on Worksheet document
         */
        commit(): void;

        /**
         * Return the cell at col.
         * If not found, create a new one.
         */
        getCell(col: string | number): Cell;

        /**
         * Iterate over all current cells in this column
         */
        eachCell(callback: (cell: Cell, rowNumber: number) => void): void;
        eachCell(options: { includeEmpty: boolean }, callback: (cell: Cell, rowNumber: number) => void): void;

        /**
         * cut one or more rows (rows below are shifted up)
         * If row properties have been defined, they will be cut or moved accordingly
         * Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
         */
        splice?(start: number, count: number, ...insert: Cell[][]): void;
    }

    export interface PageSetupOptions {
        /**
         * Whitespace on the borders of the page. Units are inches.
         */
        margins: number;
        /**
         * Orientation of the page - i.e. taller (portrait) or wider (landscape)
         */
        orientation: "portrait" | "landscape";
        /**
         * Horizontal Dots per Inch. Default value is -1
         */
        horizontalDpi: number;
        /**
         * Vertical Dots per Inch. Default value is -1
         */
        verticalDpi: number;
        /**
         * Whether to use fitToWidth and fitToHeight or scale settings. Default
         * is based on presence of these settings in the pageSetup object - if
         * both are present, scale wins (i.e. default will be false)
         */
        fitToPage: "fitToWidth" | "fitToHeight" | "scale";
        /**
         * Which order to print the pages - one of ['downThenOver',
         * 'overThenDown']
         */
        pageOrder: "downThenOver" | "overThenDown";
        /**
         * Print without colour
         */
        blackAndWhite: boolean;
        /**
         * Print with less quality (and ink)
         */
        draft: boolean;
        /**
         * Where to place comments - one of ['atEnd', 'asDisplayed', 'None']
         */
        cellComments: "atEnd" | "asDisplayed" | "None";
        /**
         * Where to show errors - one of ['dash', 'blank', 'NA', 'displayed']
         */
        errors: "dash" | "blank" | "NA" | "displayed";
        /**
         * Percentage value to increase or reduce the size of the print. Active
         * when fitToPage is false
         */
        scale: number;
        /**
         * How many pages wide the sheet should print on to. Active when
         * fitToPage is true
         */
        fitToWidth: number;
        /**
         * How many pages high the sheet should print on to. Active when
         * fitToPage is true
         */
        fitToHeight: number;
        /**
         * What paper size to use
         */
        paperSize: PageSize;
        /**
         * Whether to show the row numbers and column letters
         */
        showRowColHeaders: boolean;
        /**
         * Whether to show grid lines
         */
        showGridLines: boolean;
        /**
         * Which number to use for the first page
         */
        firstPageNumber: number;
        /**
         * Whether to center the sheet data horizontally
         */
        horizontalCentered: boolean;
        /**
         * Whether to center the sheet data vertically
         */
        verticalCentered: boolean;
        /**
         * Set the print area
         */
        printArea: string;
    }

    export interface Sheet {
        pageSetup: PageSetupOptions;
        properties: WorksheetProperties;
        views: (WorksheetViews | WorksheetFrozenViews | WorksheetSplitViews)[];

        /**
         * An array of Columns
         */
        columns: Column[];

        /**
         * The total row size of the document. Equal to the row number of the
         * last row that has values.
         */
        rowCount: number;

        /**
         * A count of the number of rows that have values. If a mid-document
         * row is empty, it will not be included in the count.
         */
        actualRowCount: number;

        /**
         * The total column size of the document. Equal to the maximum cell
         * count from all of the rows
         */
        columnCount: number;

        /**
         * A count of the number of columns that have values.
         */
        actualColumnCount: number;

        /**
         * Check of the sheet has any merges
         */
        hasMerges: boolean;

        /**
         * Bottom row of the sheet
         */
        lastRow: number;

        /**
         * Get a single column by col number or ID. If it doesn't exist, create
         * it and any gaps before it
         */
        getColumn(name: string | number): Column;

        /**
         * Get a row by row number.
         */
        getRow(name: number): Row;

        /**
         * cut one or more columns (columns to the right are shifted left)
         * If column properties have been defined, they will be cut or moved accordingly
         * Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
         */
        spliceColumns?(start: number, count: number, ...insert: Cell[][]): void;

        /**
         * cut one or more rowa (rows below are shifted up)
         * If row properties have been defined, they will be cut or moved accordingly
         * Known Issue: If a splice causes any merged cells to move, the results may be unpredictable
         */
        spliceRows?(start: number, count: number, ...insert: Cell[][]): void;

        /**
         * Find a row (if exists) by row number
         */
        findRow(row: number): Row;

        /**
         * Add a single row to the sheet
         */
        addRow(cells?: { [columnId: string]: any } | any[]): Row;

        /**
         * Add multiple rows to the sheet
         */
        addRows(cells: ({ [columnId: string]: any } | any[])[]): void;

        /**
         * Iterate over all rows that have values in a worksheet
         */
        eachRow?(callback: (row: Row, rowNumber: number) => void): void;
        eachRow?(options: { includeEmpty: boolean }, callback: (row: Row, rowNumber: number) => void): void;

        /**
         * Returns the cell at [r,c] or address given by r.
         * If not found, return undefined
         */
        findCell(address: string): Cell | undefined;
        findCell(row: number, col: number): Cell | undefined;

        /**
         * Return all rows as sparse array
         */
        getSheetValues(): Cell[][];

        /**
         * Return the cell at [r,c] or address given by r.
         * If not found, create a new one.
         */
        getCell(address: string): Cell;
        getCell(row: number, col: number): Cell;

        /**
         * Convert the range defined by ['tl:br'], [tl,br] or [t,l,b,r] into a
         * single 'merged' cell
         */
        mergeCells?(cellRange: string): void;
        mergeCells?(topLeft: string, bottomRight: string): void;
        mergeCells?(top: number, left: number, bottom: number, right: number): void;

        /**
         * Scan the range defined by ['tl:br'], [tl,br] or [t,l,b,r] and if any
         * cell is part of a merge, un-merge the group. Note this function can
         * affect multiple merges and merge-blocks are atomic - either they're
         * all merged or all un-merged.
         */
        unMergeCells?(cellRange: string): void;
        unMergeCells?(topLeft: string, bottomRight: string): void;
        unMergeCells?(top: number, left: number, bottom: number, right: number): void;
    }

    interface LoadOptions {
        base64?: boolean;
    }

    interface WriteOptions {
        base64?: boolean;
        useStyles?: boolean;
        useSharedStrings?: boolean;
    }

    export interface XLSX {
        addApp(zip: Zip, model: Model): Promise<void>;
        addContentTypes(zip: Zip, model: Model): Promise<void>;
        addCore(zip: Zip, model: Model): Promise<void>;
        addOfficeRels(zip: Zip, model: Model): Promise<void>;
        addSharedStrings(zip: Zip, model: Model): Promise<void>;
        addStyles(zip: Zip, model: Model): Promise<void>;
        addThemes(zip: Zip): Promise<void>;
        addWorkbook(zip: Zip, model: Model, options: any): Promise<void>;
        addWorkbookRels(zip: Zip, model: Model): Promise<void>;
        addWorksheets(zip: Zip, model: Model, options: any): Promise<void>;
        createInputStream(): Promise<void>;
        load(data: any, options?: LoadOptions): Promise<Workbook>;
        parseRels(stream: Stream): Promise<void>;
        parseSharedStrings(stream: Stream): Promise<void>;
        parseWorkbook(stream: Stream): Promise<void>;
        parseWorksheet(stream: Stream): Promise<void>;
        read(stream: Stream): Promise<Workbook>;
        readFile(filename: string): Promise<void>;
        reconcile(model: Model): Promise<void>;
        write(stream: Stream, options?: WriteOptions): Promise<void>;
        writeBuffer(options?: WriteOptions): Promise<void>;
        writeFile(filename: string, options?: WriteOptions): Promise<void>;
    }

    export class Workbook {
        creator?: string;
        lastModifiedBy?: string;
        lastPrinted?: Date;
        created?: Date;
        modified?: Date;
        properties?: WorkbookProperties;
        worksheets?: Sheet[];
        definedNames?: string[];
        views?: View[];
        company?: string;
        manager?: string;
        title?: string;
        subject?: string;
        keywords?: string;
        category?: string;
        description?: string;
        language?: string;
        revision?: string;

        model?: any;
        xlsx?: XLSX;

        addWorksheet?(name: string, options?: WorkbookProperties): Sheet;
        getWorksheet?(name: string | number): Sheet;
        removeWorksheet?(name: string | number): void;

        eachSheet?(callback: (worksheet: Sheet, sheetId: number) => void): void;
    }
}

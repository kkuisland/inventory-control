<script setup lang="ts">
	import { ref, watch } from 'vue'

	enum MANUFACTURER {
		HiKVision = 'HiKVision',
		ASUS = 'ASUS',
		WD = 'Western Digital',
		Paiptree = 'Paiptree',
		IpTime = 'Ip Time',
		Focus = 'Focus H&S',
	}

	const columns = ref([
		{
			name: 'name',
			required: true,
			label: '품명',
			align: 'left',
			field: row => row.name,
			format: val => `${val}`,
			sortable: true,
		},
		{ name: 'quantity', align: 'center', label: '재고량', field: 'quantity', sortable: true },
		{ name: 'memo', label: '메모', field: 'memo', sortable: true, style: 'width: 10px' },
		{ name: 'manufacturer', label: '제조사', field: 'manufacturer' },
		{ name: 'model', label: '모델명', field: 'model' },
		{ name: 'item_usage', label: '용도', field: 'item_usage' },
		{
			name: 'cost',
			label: '원가',
			field: 'cost',
			sortable: true,
			sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
		},
		{ name: 'margin', label: '마진', field: 'margin', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
		{ name: 'price', label: '판매가', field: 'price' },
		{ name: 'note', label: '비고', field: 'note' },
	])

	const rows = ref([
		{
			id: 1,
			name: 'IP_Camera',
			quantity: 3,
			memo: '',
			manufacturer: MANUFACTURER.HiKVision,
			model: 'DS-2CD1021-I',
			item_usage: '계사 내 관제 및 외벽',
			cost: 36000,
			margin: 38.89,
			price: 50000,
			note: '200만 화소',
		},
		{
			id: 2,
			name: 'IP_PTZ Camera',
			quantity: 237,
			memo: '',
			manufacturer: MANUFACTURER.HiKVision,
			model: 'DS-2DE2A204IW-DE3',
			item_usage: '중량 예측 카메라',
			cost: 121000,
			margin: 23.97,
			price: 150000,
			note: '200만 화소',
		},
		{
			id: 3,
			name: 'IP_LPR_Camera',
			quantity: 262,
			memo: '',
			manufacturer: MANUFACTURER.HiKVision,
			model: 'DS-2CD2643G2-IZS',
			item_usage: '차량 번호 인식',
			cost: 310000,
			margin: 12.9,
			price: 350000,
			note: '200만 화소',
		},
		{
			id: 4,
			name: 'Edge PC',
			quantity: 305,
			memo: '',
			manufacturer: MANUFACTURER.ASUS,
			model: 'PN51-E1-B-B5210MD',
			item_usage: 'Gateway',
			cost: 700000,
			margin: 42.86,
			price: 1000000,
			note: '8GB / SSD256 / 6코어',
		},
		{
			id: 5,
			name: 'Edge PC HDD',
			quantity: 356,
			memo: '',
			manufacturer: MANUFACTURER.WD,
			model: 'WD20SPZX-2TB',
			item_usage: 'Edge PC Storage',
			cost: 87000,
			margin: 37.93,
			price: 120000,
			note: '12ch까지 30일 저장',
		},
		{
			id: 6,
			name: 'Software',
			quantity: 375,
			memo: '',
			manufacturer: MANUFACTURER.Paiptree,
			model: 'Weight Prediction Network',
			item_usage: '중량 예측 및 밀집도 분석 프로그램',
			cost: 0,
			margin: 0.0,
			price: 220000,
			note: '걱',
		},
		{
			id: 7,
			name: '공유기',
			quantity: 392,
			memo: '',
			manufacturer: MANUFACTURER.IpTime,
			model: 'AX2004M',
			item_usage: 'Network',
			cost: 80000,
			margin: 12.5,
			price: 90000,
			note: '걱',
		},
		{
			id: 8,
			name: 'NVR',
			quantity: 408,
			memo: '',
			manufacturer: MANUFACTURER.Focus,
			model: 'FN-5116N',
			item_usage: 'VMS',
			cost: 490000,
			margin: 32.65,
			price: 650000,
			note: '걱',
		},
		{
			id: 9,
			name: 'NVR HDD',
			quantity: 452,
			memo: '',
			manufacturer: MANUFACTURER.WD,
			model: 'WD-PURPLE-4TB',
			item_usage: 'NVR Storage',
			cost: 110000,
			margin: 20.0,
			price: 132000,
			note: '걱',
		},
		{
			id: 10,
			name: 'IoT_PCB',
			quantity: 518,
			memo: '',
			manufacturer: MANUFACTURER.Paiptree,
			model: 'T/H Module PCB',
			item_usage: '온습도 측정 PCB',
			cost: 130000,
			margin: 92.31,
			price: 250000,
			note: '걱',
		},
		{
			id: 11,
			name: 'IoT_T&H',
			quantity: 518,
			memo: '',
			manufacturer: MANUFACTURER.Paiptree,
			model: 'T/H Sensor',
			item_usage: '온습도 센서',
			cost: 100000,
			margin: 10.0,
			price: 110000,
			note: '걱',
		},
		{
			id: 12,
			name: 'IoT_NH3',
			quantity: 518,
			memo: '',
			manufacturer: MANUFACTURER.Paiptree,
			model: 'NH3 Sensor',
			item_usage: '암모니아 센서',
			cost: 13000,
			margin: 15.3,
			price: 15000,
			note: '걱',
		},
	])

	const filter = ref('')

	const changeData = (id: number) => {
		console.log(id)
		rows.value.forEach(row => {
			if (row.id === id) {
				console.log(row.manufacturer)
			}
		})
	}

	const initialPagination = {
		sortBy: 'name',
		descending: false,
		page: 1,
		rowsPerPage: 10,
		// rowsNumber: rows.value.length,
	}

	watch(rows.value, (n, o) => {
		// TODO : 업데이트 진행
		console.log(n)
		console.log(o)
	})

	watch(columns.value, (n, o) => {
		console.log(n)
		console.log(o)
	})
</script>

<template>
	<div class="q-pa-md">
		<q-table flat bordered title="Treats" :rows="rows" :columns="columns" row-key="name" binary-state-sort :filter="filter" :pagination="initialPagination">
			<template v-slot:top-right>
				<q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
					<template v-slot:append>
						<q-icon name="search" />
					</template>
				</q-input>
			</template>
			<template v-slot:body="props">
				<q-tr :props="props">
					<q-td key="name" :props="props">
						{{ props.row.name }}
						<q-popup-edit v-model="props.row.name" v-slot="scope">
							<q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
						</q-popup-edit>
					</q-td>
					<q-td key="quantity" :props="props">
						{{ props.row.quantity }}
						<q-popup-edit v-model="props.row.quantity" title="Update quantity" buttons v-slot="scope">
							<q-input type="number" v-model="scope.value" dense autofocus />
						</q-popup-edit>
					</q-td>
					<q-td key="memo" :props="props">
						<div class="text-pre-wrap">{{ props.row.memo }}</div>
						<q-popup-edit v-model="props.row.memo" v-slot="scope">
							<q-input type="textarea" v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
						</q-popup-edit>
					</q-td>

					<q-td key="manufacturer" :props="props">{{ props.row.manufacturer }}</q-td>
					<q-td key="model" :props="props">{{ props.row.model }}</q-td>
					<q-td key="item_usage" :props="props">{{ props.row.item_usage }}</q-td>
					<q-td key="cost" :props="props">{{ props.row.cost }}</q-td>
					<q-td key="margin" :props="props">{{ props.row.margin }}</q-td>
					<q-td key="price" :props="props">{{ props.row.price }}</q-td>
					<q-td key="note" :props="props">{{ props.row.note }}</q-td>
				</q-tr>
			</template>
		</q-table>
	</div>
</template>
